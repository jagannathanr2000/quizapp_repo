import React from 'react'

export default function AdminAppLayout() {
    return (
        <>
        
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
        
        </>
      )
}
