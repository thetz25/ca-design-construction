import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const projectId = searchParams.get('projectId')

        if (!projectId) {
            return NextResponse.json({ error: 'Project ID is required' }, { status: 400 })
        }

        const projectsDir = path.join(process.cwd(), 'public/images/projects', projectId)

        // Check if directory exists
        if (!fs.existsSync(projectsDir)) {
            return NextResponse.json({ images: [] })
        }

        const files = fs.readdirSync(projectsDir)

        const images = files
            .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
            .map(file => `/images/projects/${projectId}/${file}`)

        return NextResponse.json({ images })
    } catch (error) {
        console.error('Error reading gallery:', error)
        return NextResponse.json({ error: 'Failed to load gallery' }, { status: 500 })
    }
}
