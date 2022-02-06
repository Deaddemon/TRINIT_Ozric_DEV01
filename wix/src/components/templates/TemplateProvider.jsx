

import { createTheme, ThemeProvider } from "@material-ui/core"
import { createContext } from "react"
import { CssBaseline } from "@material-ui/core";

const TemplateContext = createContext(null);
export const TemplateProvider = ({children }) => {
    const theme = createTheme({
        overrides:{
            MuiDialog: {
                paperWidthSm:{
                    maxWidth:'unset'
                }
            },
            MuiDialogContent: {
                root:{
                    padding: 0,
                    '&: first-child':{
                        paddingTop: 0
                    }
                }
            },
            MuiGrid:{
                Grid :{
                    '&: first-child':{
                        maxWidth: 'none'
                    }}}

        }

    })

    return (
        <TemplateContext.Provider>
            <ThemeProvider theme ={theme}>

                <CssBaseline/>
                {children}
            </ThemeProvider>
        </TemplateContext.Provider>

    )
}