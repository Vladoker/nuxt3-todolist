/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                screens: {
                    sm: "300px",
                    lg: "800px",
                },
            },
            colors: {
                blue: "#21A2F5",
                "dark-blue": "#1B88CD",
                gray: "#494D60",
                "gray-1": "#F3F5FB",
                "gray-2": "#9299B8",
                "gray-3": "#BABABA",
                "gray-4": "#CDCDCD",
                "gray-5": "#D2D2D2",
                "gray-6": "#E3E6EF",
                "gray-7": "#CFD5E4",
                red: "#DF2424",
                pink: "#FFB6B6",
            },
            fontSize: {
                sm: [
                    "14px",
                    {
                        lineHeight: "130%",
                        fontWeight: "500",
                    },
                ],
            },
        },
    },
    plugins: [],
};
