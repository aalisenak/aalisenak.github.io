export interface ITheme {
    backgroundColor?: string;
    textColor?: string;
    elementsBackground?: string;
    cardsShadow?: string;
    elementsShadow?: string;
    headerShadow?: string;
}

export const light: ITheme = {
    backgroundColor: 'var(--light-background-color)',
    textColor: "var(--light-text-color)",
    elementsBackground: 'var(--light-elements-background)',
    cardsShadow: 'var(--cards-shadow)',
    elementsShadow: 'var(--elements-shadow)',
    headerShadow: 'var(--header-box-shadow)'
}
export const dark: ITheme = {
    backgroundColor: 'var(--dark-background-color)',
    textColor: 'var(--dark-text-color)',
    elementsBackground: 'var(--dark-elements-background)',
    cardsShadow: 'var(--cards-shadow)',
    elementsShadow: 'var(--elements-shadow)',
    headerShadow: 'var(--header-box-shadow)'
}
