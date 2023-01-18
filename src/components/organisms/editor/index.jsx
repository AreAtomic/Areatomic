import { SlateEditor, SlateReader } from './components/organisms'

export const Editor = ({ value, setValue }) => {
    return <SlateEditor value={value} setValue={setValue} />
}

export const Reader = ({ value }) => {
    return <SlateReader value={value} />
}
