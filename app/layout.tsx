import Navbar from './components/Navbar/Navbar'
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import './globals.css'
import { Nunito } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const font = Nunito({ 
  subsets: ['latin'], 
});


export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={font.className} suppressHydrationWarning={true}>
        <Toaster />
        <LoginModal />        
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
