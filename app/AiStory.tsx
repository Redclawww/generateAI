"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown, ChevronUp } from "lucide-react"
// import { generateText } from "ai"
// import { openai } from "@ai-sdk/openai"

export default function AIStoryGenerator() {
  const [genre, setGenre] = useState("")
  const [tone, setTone] = useState("")
  const [writingStyle, setWritingStyle] = useState("")
  const [academicLevel, setAcademicLevel] = useState("")
  const [creativityLevel, setCreativityLevel] = useState(50)
  const [wordLimit, setWordLimit] = useState("")
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [perspective, setPerspective] = useState("")
  const [protagonist, setProtagonist] = useState("")
  const [endingType, setEndingType] = useState("")
  const [includeDialogues, setIncludeDialogues] = useState(false)
  const [setting, setSetting] = useState("")
  const [moral, setMoral] = useState("")
  const [plotStructure, setPlotStructure] = useState("")
  const [generatedSummary, setGeneratedSummary] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)
    try {
      const prompt = `Generate a story summary based on the following parameters:
        Genre: ${genre}
        Tone: ${tone}
        Writing Style: ${writingStyle}
        Academic Level: ${academicLevel}
        Creativity Level: ${creativityLevel}
        Word Limit: ${wordLimit}
        Perspective: ${perspective}
        Protagonist: ${protagonist}
        Ending Type: ${endingType}
        Include Dialogues: ${includeDialogues ? "Yes" : "No"}
        Setting: ${setting}
        Moral or Message: ${moral}
        Plot Structure: ${plotStructure}
      `

      // const { text } = await generateText({
      //   model: openai("gpt-4-turbo"),
      //   prompt: prompt,
      // })

      setGeneratedSummary("hello")
    } catch (error) {
      console.error("Error generating story:", error)
      setGeneratedSummary("An error occurred while generating the story. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="container mx-auto p-10 max-w-4xl  rounded-3xl  bg-[#F8F7FF] mt-10 " >
      <h1 className="text-5xl font-bold mb-4 font-montserrat">AI Story Generator</h1>
      <form onSubmit={handleSubmit} className="space-y-6 mt-5">
        <div className="flex gap-10 ">
        <div className="flex-1">
          <Label htmlFor="genre" className="font-semibold">Genre</Label>
          <Select onValueChange={setGenre} value={genre}>
            <SelectTrigger id="genre" className="bg-white border-none shadow-none">
              <SelectValue placeholder="Select genre"/>
            </SelectTrigger>
            <SelectContent className="border-none shadow-none">
              <SelectItem value="fantasy">Fantasy</SelectItem>
              <SelectItem value="sci-fi">Sci-Fi</SelectItem>
              <SelectItem value="horror">Horror</SelectItem>
              <SelectItem value="mystery">Mystery</SelectItem>
              <SelectItem value="romance">Romance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <Label htmlFor="tone" className="font-semibold !font-montserrat">Tone</Label>
          <Select onValueChange={setTone} value={tone}>
            <SelectTrigger id="tone" className="bg-white border-none shadow-none">
              <SelectValue placeholder="Select tone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lighthearted">Lighthearted</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="humorous">Humorous</SelectItem>
              <SelectItem value="dramatic">Dramatic</SelectItem>
            </SelectContent>
          </Select>
        </div>
        </div>
        <div className="flex gap-10 ">
        <div className="flex-1">
          <Label htmlFor="writingStyle" className="font-semibold">Writing Style</Label>
          <Select onValueChange={setWritingStyle} value={writingStyle}>
            <SelectTrigger id="writingStyle" className="bg-white border-none shadow-none">
              <SelectValue placeholder="Select writing style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="casual">Casual</SelectItem>
              <SelectItem value="formal">Formal</SelectItem>
              <SelectItem value="poetic">Poetic</SelectItem>
              <SelectItem value="conversational">Conversational</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <Label htmlFor="academicLevel" className="font-semibold">Academic Level / Readability</Label>
          <Select onValueChange={setAcademicLevel} value={academicLevel} >
            <SelectTrigger id="academicLevel" className="bg-white border-none shadow-none">
              <SelectValue placeholder="Select academic level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
        </div>
        <div className="flex gap-10">
        <div className="flex-1">
          <Label htmlFor="creativityLevel" className="font-semibold">Creativity Level</Label>
          <Slider
            id="creativityLevel"
            min={0}
            max={100}
            step={1}
            value={[creativityLevel]}
            onValueChange={(value) => setCreativityLevel(value[0])}
            className="mt-2 "
            color="#1176A8"
                    />
          <div className="text-sm text-gray-500 mt-1">{creativityLevel}</div>
        </div>

        <div className="flex-1">
          <Label htmlFor="wordLimit" className="font-semibold">Word Limit</Label>
          <Select onValueChange={setWordLimit} value={wordLimit}>
            <SelectTrigger id="wordLimit" className="bg-white border-none shadow-none">
              <SelectValue placeholder="Select word limit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="short">Short Story (1,000 - 7,500 words)</SelectItem>
              <SelectItem value="medium">Medium-Length (7,500 - 20,000 words)</SelectItem>
              <SelectItem value="full">Full-Length (20,000+ words)</SelectItem>
            </SelectContent>
          </Select>
        </div>
          </div> 
        



        <div className="space-y-4">
          <Label htmlFor="protagonist" className="text-2xl font-semibold">Prompt</Label>
          <Textarea
            id="protagonist"
            placeholder="Enter your pormpt to generate the story
            "
            className="bg-white border-none shadow-none" 
            rows={8}
            />
        </div>

       
        <Button type="submit" className="px-16 py-7 w-fit bg-[#1176A8] rounded-full font-medium text-xl" disabled={isGenerating}>
          {isGenerating ? "Generating..." : "Generate Story Summary"}
        </Button>
      </form>
      <div className=" pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className=" flex  items-center !border-none !bg-transparent !shadow-none hover:!bg-white "
          >
            Advanced Options (Optional)
            {showAdvanced ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
        {showAdvanced && (
          <div className="space-y-6 mt-5">
            <div className="flex gap-10">
            <div className="flex-1">
              <Label htmlFor="perspective">Perspective</Label>
              <Select onValueChange={setPerspective} value={perspective}>
                <SelectTrigger id="perspective" className="bg-white border-none shadow-none">
                  <SelectValue placeholder="Select perspective" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="first-person">First-Person</SelectItem>
                  <SelectItem value="third-person">Third-Person</SelectItem>
                  <SelectItem value="omniscient">Omniscient</SelectItem>
                </SelectContent>
              </Select>
            </div>
               <div className="flex-1">
              <Label htmlFor="protagonist">Protagonist Details</Label>
              <Input
                id="protagonist"
                placeholder="Name, traits, gender, age"
                value={protagonist}
                onChange={(e) => setProtagonist(e.target.value)}
                className="bg-white border-none shadow-none"
              />
            </div>
            </div>
            <div className="flex gap-10">
            <div className="flex-1">
              <Label htmlFor="endingType">Story Ending Type</Label>
              <Select onValueChange={setEndingType} value={endingType}>
                <SelectTrigger id="endingType" className="bg-white border-none shadow-none">
                  <SelectValue placeholder="Select ending type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="happy">Happy</SelectItem>
                  <SelectItem value="tragic">Tragic</SelectItem>
                  <SelectItem value="cliffhanger">Cliffhanger</SelectItem>
                  <SelectItem value="open-ended">Open-Ended</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label htmlFor="setting">Setting / World-Building</Label>
              <Input
                id="setting"
                placeholder="Time period, location"
                value={setting}
                onChange={(e) => setSetting(e.target.value)}
                className="bg-white border-none shadow-none"
              />
            </div>
            </div>
            <div className="flex gap-10">
            <div className="flex-1">
              <Label htmlFor="moral">Moral or Message</Label>
              <Input
                id="moral"
                placeholder="Should the story have a lesson?"
                value={moral}
                onChange={(e) => setMoral(e.target.value)}
                className="bg-white border-none shadow-none"
              />
            </div>

            <div className="flex-1">
              <Label htmlFor="plotStructure">Plot Structure</Label>
              <Select onValueChange={setPlotStructure} value={plotStructure}>
                <SelectTrigger id="plotStructure" className="bg-white border-none shadow-none">
                  <SelectValue placeholder="Select plot structure" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="linear">Linear</SelectItem>
                  <SelectItem value="non-linear">Non-linear</SelectItem>
                  <SelectItem value="flashbacks">Flashbacks</SelectItem>
                </SelectContent>
              </Select>
            </div>
            </div>
           

            

            <div className="flex items-center space-x-2">
              <Switch id="includeDialogues" checked={includeDialogues} onCheckedChange={setIncludeDialogues} />
              <Label htmlFor="includeDialogues">Include Dialogues</Label>
            </div>

           

          
          </div>
        )}
      {generatedSummary && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Generated Story Summary</h2>
          <Textarea value={generatedSummary} readOnly className="w-full h-64 bg-white rounded-xl" />
        </div>
      )}
    </div>
  )
}

