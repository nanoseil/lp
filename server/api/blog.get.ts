export default defineEventHandler(async (event) => {
  try {
    // Use Nitro's storage to read content files directly
    const { readdir, readFile } = await import('fs/promises')
    const { join } = await import('path')
    
    const contentDir = join(process.cwd(), 'content')
    const blogPosts = []
    
    // Helper function to process markdown files
    const processMarkdownFile = async (filePath: string, relativePath: string) => {
      try {
        const content = await readFile(filePath, 'utf-8')
        const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
        
        if (frontmatterMatch) {
          const frontmatter = frontmatterMatch[1]
          const body = content.slice(frontmatterMatch[0].length)
          
          // Parse frontmatter (simple implementation)
          const metadata: any = {}
          frontmatter.split('\n').forEach(line => {
            const [key, ...valueParts] = line.split(':')
            if (key && valueParts.length > 0) {
              let value = valueParts.join(':').trim()
              // Remove quotes if present
              if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1)
              }
              metadata[key.trim()] = value
            }
          })
          
          return {
            _path: relativePath.replace('.md', '').replace(/\\/g, '/'),
            ...metadata,
            body
          }
        }
      } catch (error) {
        console.error('Error processing file:', filePath, error)
      }
      return null
    }
    
    // Read blog directory
    try {
      const blogDir = join(contentDir, 'blog')
      const categories = await readdir(blogDir)
      
      for (const category of categories) {
        const categoryDir = join(blogDir, category)
        const files = await readdir(categoryDir)
        
        for (const file of files) {
          if (file.endsWith('.md')) {
            const filePath = join(categoryDir, file)
            const relativePath = `/blog/${category}/${file}`
            const post = await processMarkdownFile(filePath, relativePath)
            if (post) {
              blogPosts.push(post)
            }
          }
        }
      }
    } catch (error) {
      // Try root content directory for test files
      try {
        const files = await readdir(contentDir)
        for (const file of files) {
          if (file.endsWith('.md')) {
            const filePath = join(contentDir, file)
            const relativePath = `/${file}`
            const post = await processMarkdownFile(filePath, relativePath)
            if (post) {
              blogPosts.push(post)
            }
          }
        }
      } catch (rootError) {
        console.error('Error reading root content:', rootError)
      }
    }
    
    return {
      posts: blogPosts,
      total: blogPosts.length
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return {
      posts: [],
      total: 0,
      error: error.message
    }
  }
})