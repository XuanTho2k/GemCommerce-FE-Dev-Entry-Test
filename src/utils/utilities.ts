export const AdminUtils = {
  formatNumericValue: (value: string, unit: "percentage" | "pixel") => {
    if (value == null || value === "") return "0";

    value = value.replace(",", ".");

    let cleaned = "";
    let dotUsed = false;
    let minusUsed = false;
    for (const ch of value) {
      if (/\d/.test(ch)) {
        cleaned += ch;
      } else if (ch === "." && !dotUsed) {
        cleaned += ".";
        dotUsed = true;
      } else if (ch === "-" && !minusUsed) {
        cleaned += "-";
        minusUsed = true;
      }
    }

    if (cleaned === "" || cleaned === "." || cleaned === "-") return "0";

    let num = parseFloat(cleaned);

    if (isNaN(num)) return "0";

    if (num < 0) num = 0;

    if (unit === "percentage" && num > 100) {
      num = 100;
    }

    return num.toString();
  },
};
