"use client"
import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'
import type { Snippet } from '@/generated/prisma'
import { Button } from './ui/button'

const EditSnippetForm = ({snippet}:{snippet:Snippet}) => {

    const [code, setCode] = useState(snippet.code);


  return (
    <div className='flex flex-col gap-5'>
        <form className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold'>Edit your code:</h1>
        <Button type='submit'>Save</Button>
        </form>
         <Editor height="40vh" theme='vs-dark' defaultLanguage="python" defaultValue={code} />;
    </div>
  )
}

export default EditSnippetForm