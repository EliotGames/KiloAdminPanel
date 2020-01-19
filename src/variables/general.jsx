// ##############################
// // // tasks list for Tasks card in Dashboard view
// #############################

const tasks = [
  {
    checked: true,
    text: 'Sign contract for "What are conference organizers afraid of?"'
  },
  {
    checked: false,
    text: "Lines From Great Russian Literature? Or E-mails From My Boss?"
  },
  {
    checked: true,
    text:
      "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit"
  }
];

// ##############################
// // // table head data and table body data for Tables view
// #############################

const thead = ["Name", "Product", "Status", "Current weight", "Last updated"];
const tbody = [
  {
    className: "table-success",
    data: ["Nazars super KiLo X", "Apples", "75%", "7277 gram left", "30m ago"]
  },
  {
    className: "",
    data: ["Nazar KiLo", "Coffee", "24%", "1500 gram left", "More than day ago"]
  },
  {
    className: "table-info",
    data: ["Ultra KiLo", "Tea", "-", "120 gram left", "Never updated yet"]
  }
];

// tasks list for Tasks card in Dashboard view
// data for <thead> of table in TableList view
// data for <tbody> of table in TableList view
export { tasks, thead, tbody };
