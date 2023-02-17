export const getMonthFromTimeStamp = (timeStamp) => {
    const formatter = new Intl.DateTimeFormat("en-US", { month: "short" });
    return formatter.format(new Date(timeStamp));
};
