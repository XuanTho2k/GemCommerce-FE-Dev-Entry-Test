export const AdminUtils = {
  formatNumericValue: (
    value: string | null,
    unit: "percentage" | "pixel" = "pixel"
  ) => {
    if (value == null || value === "") return "0";

    value = value.replace(",", ".");

    let num = parseFloat(value);

    let cleaned = "";
    let dotUsed = false;
    let minusUsed = false;

    if (isNaN(num)) {
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
      return parseFloat(cleaned).toString();
    }
    if (num < 0) num = 0;

    if (unit === "percentage" && num > 100) {
      num = 100;
    }

    return num.toString();
  },
};
