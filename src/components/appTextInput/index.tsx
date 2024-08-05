import React from "react";
import TextField from "@mui/material/TextField";
import style from "./appTextInput.module.css";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {CacheProvider} from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import {styled} from "@mui/material/styles";
import {TextFieldProps} from "@mui/material/TextField";

const theme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: ["IRANSans"].join(","),
    },
});
const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
});

const RedditTextField = styled((props: TextFieldProps) => (
    <TextField
        multiline
        // InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
        {...props}
    />
))(({theme}) => ({
    "& .MuiFilledInput-root": {
        borderRadius: 10,
        fontSize: "12px",
        backgroundColor: "#F0F1F7",
        border: "1px solid",
        borderColor: "transparent",
        transition: theme.transitions.create([
            "border-color",
            "background-color",
            "box-shadow",
        ]),
        "&:hover": {
            backgroundColor: "transparent",
        },
        "&.Mui-focused": {
            borderColor: theme.palette.primary.main,
            backgroundColor: "transparent",
        },
    },
    "& .MuiFormLabel-root": {
        fontSize: "14px",
    },
}));

type AppTextInputProps = {
    label: string,
    placeholder: string,
    value: string,
    defaultValue?: string,
    onClick: () => void,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
    disabled?: boolean,
    onKeyUp?: () => void,
    name?: string,
    onInput?: () => void,
    onBlur?: () => void,
    inputProps?: any,
    endIcon?: any,
}

function AppTextInput({
                          label,
                          placeholder,
                          value,
                          defaultValue,
                          onClick,
                          onChange,
                          disabled,
                          onKeyUp,
                          name,
                          onInput,
                          onBlur,
                          inputProps,
                          endIcon,
                      }: AppTextInputProps) {
    return (
        <>
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <RedditTextField
                        sx={{
                            borderRadius: "10px",
                        }}
                        onInput={onInput}
                        label={label}
                        placeholder={placeholder}
                        id="reddit-input"
                        variant="filled"
                        className={style.customInput}
                        value={value}
                        defaultValue={defaultValue}
                        onClick={onClick}
                        onChange={onChange}
                        disabled={disabled}
                        onKeyUp={onKeyUp}
                        name={name}
                        onBlur={onBlur}
                        inputProps={inputProps}
                        InputProps={{
                            endAdornment: endIcon && endIcon,
                            disableUnderline: true,
                        }}
                    />
                </ThemeProvider>
            </CacheProvider>
        </>
    );
}

export default AppTextInput;
