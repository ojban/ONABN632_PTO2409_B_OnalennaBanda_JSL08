// 1. Create a variable to store the singleton instance of the bank branch.
let bankBranchInstance = null;

// 2. Define a class called `BankBranch` for managing branch information.
class BankBranch {
  // 3. In the `BankBranch` class:
  constructor(branchInfo) {
    // If an instance already exists, return it
    if (bankBranchInstance) {
      return bankBranchInstance;
    }

    // Otherwise, set the branchInfo and assign the instance
    this.branchInfo = branchInfo;
    bankBranchInstance = this;
  }

  // Add methods to manage branch-related information
  getBranchInfo() {
    return this.branchInfo;
  }
}

// Usage
const branchA = new BankBranch("Branch A Information");
const branchB = new BankBranch("Branch B Information");

// Display the branch information
console.log(branchA.getBranchInfo()); // Outputs: Branch A Information
console.log(branchB.getBranchInfo()); // Outputs: Branch A Information

// Check if branchA and branchB refer to the same instance
console.log(branchA === branchB); // Outputs: true
