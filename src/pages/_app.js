import 'tailwindcss/tailwind.css'
import {AuthProvider } from '../Context/AuthContext'



function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
        <Component {...pageProps} />
    </AuthProvider>

  )
}

export default MyApp
