import React from 'react'


export default function dashboardLayout({
  children,}: Readonly<{
  children: React.ReactNode;
}>){
  return (
     <html lang="en">
      <body
        
      ><nav>
        Dashboard layout
      </nav>
        {children}
      </body>
    </html>
  )
}   
