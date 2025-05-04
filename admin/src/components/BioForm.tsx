"use client";

import { assets } from "@/assets/assets";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { UserRoundPen } from "lucide-react";
import { fetchBio, createBio, updateBio } from "@/actions/bioActions";

export default function BioForm({ email }: { email: string }) {
  const [formValues, setFormValues] = useState({
    name: "",
    title: "",
    description: "",
    image: "",
  });
  const [previewUrl, setPreviewUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bioExists, setBioExists] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const loadBio = async () => {
      if (!email) return;
      
      try {
        const bio = await fetchBio(email);
        
        if (bio.success && bio.data && bio.data.id !== 0) {
          // Bio exists
          setBioExists(true);
          setFormValues({
            name: bio.data.name || "",
            title: bio.data.title || "",
            description: bio.data.description || "",
            image: bio.data.image || "",
          });
          setPreviewUrl(bio.data.image || "");
        } else {
          // No bio exists yet
          setBioExists(false);
          setFormValues({
            name: "",
            title: "",
            description: "",
            image: "",
          });
          setPreviewUrl("");
        }
      } catch (error) {
        console.error("Failed to load bio:", error);
        setErrorMessage("Failed to load bio data");
      }
    };
    
    loadBio();
  }, [email]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    // Check image size before trying to upload
    if (selectedFile && selectedFile.size > 10 * 1024 * 1024) { // 10MB max
      setErrorMessage("Image size is too large. Please select an image smaller than 10MB.");
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", formValues.name);
    formData.append("title", formValues.title);
    formData.append("description", formValues.description);
    
    if (selectedFile) {
      try {
        // Compress image before uploading
        const compressedFile = await compressImage(selectedFile);
        formData.append("image", compressedFile);
      } catch (error) {
        console.error("Failed to compress image:", error);
        formData.append("image", selectedFile); // Fall back to original if compression fails
      }
    }

    try {
      let response;
      
      // Set a timeout for the request
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 seconds timeout
      
      if (bioExists) {
        // Update existing bio
        response = await updateBio(formData);
      } else {
        // Create new bio
        response = await createBio(formData);
      }
      
      clearTimeout(timeoutId);
      
      if (response.success) {
        alert(bioExists ? "Bio updated successfully" : "Bio created successfully");
        setBioExists(true);
        
        if (response.data?.image) {
          setPreviewUrl(response.data.image);
        }
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : "An unknown error occurred";
      console.error("Failed to save bio:", error);
      
      if (errorMsg.includes("timeout") || errorMsg.includes("aborted")) {
        setErrorMessage("The request timed out. Your image might be too large or your connection is slow.");
      } else {
        setErrorMessage(errorMsg);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6 flex flex-col items-center justify-center"
    >
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-full">
          <strong>Error:</strong> {errorMessage}
        </div>
      )}
      
      {/* Image Upload + Preview */}
      <div className="relative w-64 h-64 rounded-full overflow-hidden group cursor-pointer">
        <Image
          src={previewUrl || assets.user}
          alt="Profile"
          fill
          sizes="256px"
          className="object-cover transition-all"
        />
        <div className="absolute inset-0 bg-gray-500/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <UserRoundPen className="w-6 h-6 text-gray-700" />
        </div>
        <input
          type="file"
          name="image"
          accept="image/*"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleImageChange}
        />
      </div>

      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={formValues.name}
          onChange={(e) =>
            setFormValues({ ...formValues, name: e.target.value })
          }
          required
          className="w-96"
        />
      </div>

      {/* Title */}
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          value={formValues.title}
          onChange={(e) =>
            setFormValues({ ...formValues, title: e.target.value })
          }
          required
          className="w-96"
        />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formValues.description}
          onChange={(e) => {
            setFormValues({ ...formValues, description: e.target.value });
          }}
          className="w-96 h-36"
          required
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting 
          ? "Saving..." 
          : bioExists 
            ? "Update Bio" 
            : "Create Bio"
        }
      </Button>
    </form>
  );
}

// Add this helper function to compress images before upload
async function compressImage(file: File): Promise<File> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 1200;
        const MAX_HEIGHT = 1200;
        let width = img.width;
        let height = img.height;
        
        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);
        
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Canvas to Blob conversion failed'));
              return;
            }
            const compressedFile = new File([blob], file.name, {
              type: 'image/jpeg',
              lastModified: Date.now(),
            });
            resolve(compressedFile);
          },
          'image/jpeg',
          0.7  // Quality 70%
        );
      };
      img.onerror = reject;
    };
    reader.onerror = reject;
  });
}
