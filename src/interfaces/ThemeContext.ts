type ITheme = 'light' | 'dark';
export interface IThemeContext {

    theme: ITheme
    toggleTheme: (theme: ITheme) => void
    // toggleTheme: () => void
}