import LoginBar from "@/components/LoginBar"
import Link from "next/link"

export const metadata = {
  title: 'Login Page',
  description: 'must login first to access our app'
}

function login() {
  return (
    <>
      <div className="text-white h-[100vh] flex justify-center items-center ">
        <LoginBar />
      </div>
    </>
  )
}

export default login