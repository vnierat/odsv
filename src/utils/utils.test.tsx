import { dateFormatter, getIconType } from "./utils";

describe("getIconType", () => {
  it("should return SuccessIcon", () => {
    expect(getIconType("success")).toEqual("success.svg");
  });
  it("should return FailureIcon", () => {
    expect(getIconType("failure")).toEqual("error.svg");
  });
  it("should return WarningIcon", () => {
    expect(getIconType("warning")).toEqual("warning.svg");
  });
});

describe("dateFormatter", () => {
  it("should return 27/10/2021 05:28", () => {
    expect(dateFormatter("Oct 27, 2021 5:28 AM")).toEqual("27/10/2021 05:28");
  });
  it("should return specific date with ISO Date", () => {
    expect(dateFormatter("2021-11-13T16:52:48.000Z")).toEqual(
      "13/11/2021 17:52"
    );
  });
  it("should return Invalid Date", () => {
    expect(dateFormatter("27-10-2021 05:28")).toEqual(
      "Invalid Date Invalid Date"
    );
  });
});
