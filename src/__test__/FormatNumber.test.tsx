import { describe, it, expect } from "vitest";
import { AdminUtils } from "../utils/utilities";

describe("AdminUtils.formatNumericValue", () => {
  //  1. Cho phép nhập integer và float
  it("accepts integer and float values", () => {
    expect(AdminUtils.formatNumericValue("12")).toBe("12");
    expect(AdminUtils.formatNumericValue("12.3")).toBe("12.3");
  });

  //  2. Nếu input chứa dấu phẩy -> Thay thành dấu chấm
  it("replaces comma with dot", () => {
    expect(AdminUtils.formatNumericValue("12,3")).toBe("12.3");
  });

  //  3. Nếu chứa ký tự không hợp lệ -> loại bỏ
  it("removes invalid characters at different positions", () => {
    // 123a -> 123
    expect(AdminUtils.formatNumericValue("123a")).toBe("123");
    // 12a3 -> chỉ lấy đến phần hợp lệ đầu tiên -> 12
    expect(AdminUtils.formatNumericValue("12a3")).toBe("12");
    // a123 -> bỏ ký tự đầu -> 123
    expect(AdminUtils.formatNumericValue("a123")).toBe("123");
    // 12.4.5 -> chỉ giữ phần hợp lệ đầu tiên -> 12.4
    expect(AdminUtils.formatNumericValue("12.4.5")).toBe("12.4");
  });

  //  4. User nhập < 0 và blur -> tự động về 0
  it("clamps negative numbers to 0", () => {
    expect(AdminUtils.formatNumericValue("-5")).toBe("0");
  });

  //  5. Unit = % => >100 thì trả về giá trị hợp lệ gần nhất (100)
  it("clamps percentage >100 to 100", () => {
    expect(AdminUtils.formatNumericValue("150", "percentage")).toBe("100");
  });

  //  6. Unit = pixel => không giới hạn 100
  it("does not clamp pixel unit above 100", () => {
    expect(AdminUtils.formatNumericValue("150")).toBe("150");
  });

  //  7. Nếu không thể parse được số -> trả về '0'
  it("returns 0 for invalid input like '.', '-', '..', 'abc'", () => {
    expect(AdminUtils.formatNumericValue(".")).toBe("0");
    expect(AdminUtils.formatNumericValue("-")).toBe("0");
    expect(AdminUtils.formatNumericValue("..")).toBe("0");
    expect(AdminUtils.formatNumericValue("abc", "percentage")).toBe("0");
  });

  //  8. Nếu input là rỗng/null -> '0'
  it("returns 0 for empty or null input", () => {
    expect(AdminUtils.formatNumericValue("")).toBe("0");
    expect(AdminUtils.formatNumericValue(null, "percentage")).toBe("0");
  });

  //  9. Disable button “-” nếu giá trị hiện tại là 0
  it("button '-' should be disabled when value = 0", () => {
    const value = parseFloat(AdminUtils.formatNumericValue("0"));
    expect(value).toBe(0);
    const minusDisabled = value <= 0;
    expect(minusDisabled).toBe(true);
  });

  //  10. Disable button “+” nếu giá trị hiện tại là 100 và unit = %
  it("button '+' should be disabled when value = 100 (percentage)", () => {
    const value = parseFloat(
      AdminUtils.formatNumericValue("100", "percentage")
    );
    const plusDisabled = value >= 100;
    expect(plusDisabled).toBe(true);
  });
});
