import React from 'react'
import Link from 'next/link'

const Blog = () => {
  return (
    <div style={{marginTop:'25vh'}}>
      <div className="blog" style={{padding:'25px'}}>
        <div className="blogItem">
        <Link href='/blogPost/Just a Blog'><h2 style={{textAlign:'center'}}>Just a Blog</h2></Link>
          <p style={{textAlign:'center'}}>Hi guyszz please come check my very first blog</p>
        </div>
      </div>
      <div className="blog" style={{padding:'25px'}}>
        <div className="blogItem">
          <Link href='/blogPost/Just a Blog'><h2 style={{textAlign:'center'}}>Just a Blog</h2></Link>
          <p style={{textAlign:'center'}}>Hi guyszz please come check my very first blog</p>
        </div>
      </div>
      <div className="blog" style={{padding:'25px'}}>
        <div className="blogItem">
          <Link href='/blogPost/Just a Blog'><h2 style={{textAlign:'center'}}>Just a Blog</h2></Link>
          <p style={{textAlign:'center'}}>Hi guyszz please come check my very first blog</p>
        </div>
      </div>
      <div className="blog" style={{padding:'25px'}}>
        <div className="blogItem">
        <Link href='/blogPost/Just a Blog'><h2 style={{textAlign:'center'}}>Just a Blog</h2></Link>
          <p style={{textAlign:'center'}}>Hi guyszz please come check my very first blog</p>
        </div>
      </div>
    </div>
  )
}

export default Blog
