import { Tabs, useTheme } from '@geist-ui/core'
import { useRouter } from 'next/router'

function TabBar() {
    const router = useRouter()
    const theme = useTheme()
    return (
        <>
            <nav className='TabBar__wrapper'>
                <div className='TabBar__tablist'>
                    <Tabs hideDivider value={router.asPath} onChange={(route) => router.push(route)}>
                        <Tabs.Item label="overview" value="/" />
                        <Tabs.Item label="projects" value="/projects" />
                        <Tabs.Item label="integrations" value="/integrations" />
                        <Tabs.Item label="activity" value="/activity" />
                        <Tabs.Item label="domains" value="/domains" />
                        <Tabs.Item label="usage" value="/usage" />
                        <Tabs.Item label="settings" value="/settings" />
                    </Tabs>
                </div>
            </nav>
            <style jsx>{`
                .TabBar__wrapper {
                    position: relative;
                    box-shadow: inset 0 -1px ${theme.palette.border};
                    overflow-y: hidden;
                }
                .TabBar__tablist {
                    display: flex;
                    width: ${theme.layout.pageWidthWithMargin};
                    max-width: 100%;
                    margin: 0 auto;
                    padding: 0 ${theme.layout.pageMargin};
                    height: 48px;
                }
            `}</style>
        </>
    )
}

export default TabBar
