import React from "react"
import Button from "@components/button"
export default {
    title: "Components/Buttons",
}
console.log(process.env.NODE_ENV)
const Template = (props) => <Button {...props} />

export const Primary = Template.bind({})
Primary.props = {
    label: "Click",
    bgColor: "primary-500",
}
