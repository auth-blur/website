import Button from "@components/button"

export default {
    title: "Buttons",
}

const Template = (props) => <Button {...props} />

export const Primary = Template.bind({})
Primary.props = {
    label: "Click",
    bgColor: "primary-500",
}
