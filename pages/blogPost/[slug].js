import React from 'react'
import { useRouter } from 'next/router'

const slug = () => {
    const router = useRouter()
    const {slug} = router.query;

  return (
    <div>
      <h1 style={{margin:'auto',padding:'50px'}}>{slug}</h1>
    </div>
  )
}

export default slug
