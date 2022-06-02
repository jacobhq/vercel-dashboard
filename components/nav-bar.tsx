import { Tabs, useTheme, Text } from '@geist-ui/core'
import { useRouter } from 'next/router'
import TabBar from './tab-bar'

function NavBar() {
    const router = useRouter()
    const theme = useTheme()
    return (
        <>
            <div className='NavBar__wrapper'>
                <div className='NavBar__inner'>
                    <Text>Hi</Text>
                </div>
            </div>
            <TabBar />
            <style jsx>{`
                .NavBar__wrapper {
                    position: relative;
                    overflow-y: hidden;
                }
                .NavBar__inner {
                    margin: 0 auto;
                    padding: 0 ${theme.layout.pageMargin};
                    width: ${theme.layout.pageWidthWithMargin};
                }
            `}</style>
        </>
    )
}

export default NavBar
