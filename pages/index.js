import Button from "@components/button"
import Input from "@components/input"
import SingleLayout from "@layouts/single-layout"
import { useState } from "react"
import { toast } from "react-toastify"

const Page = () => {
    const [mail, setMail] = useState()
    const handle = async () => {
        if(!mail) return toast.error("Please enter the email",{
            className: "toast-error toast",
        })
        const data = await fetch("http://localhost:3001/v1/early/mail", {
            method: "POST",
            body: new URLSearchParams({mail}),
        })
        if (data.status > 199 && data.status < 299) {
            toast.success(`Successfully ${mail} Joined`, {
                className: "toast toast-success",
            })
        }else {
            const { message } = await data.json()
            toast.error(message,{
                className: "toast-error toast",
            })
        }
    }
    return (
        <>
            <h1 className="font-extrabold text-5xl mx-auto mb-2 text-center max-w-md">
                Join our early access list!
            </h1>
            <h2 className="font-medium text-xl mb-6 text-center">
                All of your things, in one place
            </h2>
            <div className="px-6">
                <Input
                    placeholder="Enter email to join"
                    onChange={(e) => setMail(e.target.value)}
                    value={mail}
                >
                    <Button label="Join" onClick={handle} />
                </Input>
            </div>
        </>
    )
}

export default SingleLayout(Page)
