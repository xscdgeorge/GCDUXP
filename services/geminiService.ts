import { GoogleGenAI, VideoGenerationReferenceImage, VideoGenerationReferenceType } from "@google/genai";

const getApiKey = () => process.env.API_KEY || '';

export const chatWithGeorgeAI = async (userMessage: string): Promise<string> => {
  const apiKey = getApiKey();
  if (!apiKey) {
    return "I'm currently offline (API Key missing). Please check back later!";
  }

  const ai = new GoogleGenAI({ apiKey });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `You are the AI version of George, a UX Design Manager and Leadership Coach. 
        Your tone is professional, empathetic, contemporary, and insightful.
        
        Key traits about you:
        - You practice servant leadership and radical candor.
        - You value systems thinking and accessibility.
        - You have led teams delivering major fintech, healthcare, and AI products.
        - You believe in empowering designers, not micromanaging them.
        
        Keep answers concise (under 3 sentences) unless asked for details. 
        If asked about your availability, suggest emailing george@example.com.
        `
      }
    });
    
    return response.text || "I'm having trouble processing that thought right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble processing that thought right now. Maybe ask me about my design process?";
  }
};

export interface VideoGenerationParams {
  prompt: string;
  image?: {
    data: string;
    mimeType: string;
  };
  aspectRatio?: "16:9" | "9:16";
}

export const generateVeoVideo = async (params: VideoGenerationParams): Promise<string> => {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error("API Key missing");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: params.prompt,
      image: params.image ? {
        imageBytes: params.image.data,
        mimeType: params.image.mimeType
      } : undefined,
      config: {
        numberOfVideos: 1,
        resolution: '1080p',
        aspectRatio: params.aspectRatio || '16:9'
      }
    });

    // Poll for completion
    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 5000));
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!downloadLink) {
      throw new Error("Failed to get video download link");
    }

    return downloadLink;
  } catch (error) {
    console.error("Veo Error:", error);
    throw error;
  }
};
