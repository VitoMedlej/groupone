import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'
import ContactSection from '@/Components/ContactSection/ContactSection'

export const metadata = {
    title: 'GroupOne CMI | Advanced Sterilization & Disinfection',
    description: `ISO-certified sterilization experts using UVC technology for surface, air, and room disinfection. Safe solutions for homes, gyms, institutions, and more.`,
    icons: {
        icon: `https://ucarecdn.com/e8c67931-1ec6-4c5a-a405-619c5f86e32a/grouponelogo.jpg`
    }
}

export default function RootLayout({children} : {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&display=swap" rel="stylesheet"/>
            </head>

            <body className=''>

                <ContextWrapper>
                    <Navbar/>
                    <Sidebar cates={undefined}/>
                    <QuickCart/>
                    <ScrollToTop/>
                    <main >

                     {children}
                    </main>
                    <ContactSection/>
                    <Footer/>
                </ContextWrapper>
            </body>
        </html>
    )
}
