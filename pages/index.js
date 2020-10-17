import Button from "@components/button"
import Input from "@components/input"
import SingleLayout from "@layouts/single-layout"

const Page = () => {
    const handle = async () => {
        const data = await fetch("https://api.picass.co/v1/early/mail", {
            method: "POST",
        })
        if (data.status > 199 && data.status < 299) {
            //
        } else {
            //
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
            <Input placeholder="Enter email to join ">
                <Button label="Join" onClick={handle} />
            </Input>
        </>
    )
}

export default SingleLayout(Page)
