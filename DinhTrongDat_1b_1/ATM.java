package DinhTrongDat_1b_1;

import java.util.Scanner;

public class ATM {
    public static void main(String[] args) {
        System.out.println("Welcome to ATM Application");
        View.khoiNaoMenu();
    }

    static class AccountModel {
        private int accountNo;
        private String password;
        private double amount;
        private String customerName;

        // Constructor
        public AccountModel(int accNo, String pass, double amount, String name) {
            this.accountNo = accNo;
            this.password = pass;
            this.amount = amount;
            this.customerName = name;
        }

        // Ham set de thay doi gia tri cho thuoc tinh
        public void setAccountNo(int accNo) {
            this.accountNo = accNo;
        }

        // Ham get de lay gia tri cua thuoc tinh
        public int getAccountNo() {
            return this.accountNo;
        }

        public void setPassword(String pass) {
            this.password = pass;
        }

        // Ham get de lay gia tri cua thuoc tinh
        public String getPassword() {
            return this.password;
        }

        public void setAmount(double amount) {
            this.amount = amount;
        }

        // Ham get de lay gia tri cua thuoc tinh
        public double getAmount() {
            return this.amount;
        }

        public void setCustomerName(String custName) {
            this.customerName = custName;
        }

        // Ham get de lay gia tri cua thuoc tinh
        public String getCustomerName() {
            return this.customerName;
        }

        public boolean checkLogin(int accNo, String pass) {
            // Kiem tra login voi tai khoan nay
            return accNo == this.accountNo && pass.equals(this.password);
        }

        public boolean withdraw(double amount) {
            // Rut tien khoi tai khoan
            if (amount < this.amount) {
                this.amount -= amount;
                return true;
            } else
                return false;
        }

        public boolean depost(double amount) {
            // Nop tien vao tai khoan
            if (amount > 0) {
                this.amount += amount;
                return true;
            } else
                return false;
        }

    }

    static class View {

        public static void khoiNaoMenu() {
            String choice = "y";

            // Tạo một tài khoản mới và gán giá trị cho nó
            AccountModel acc = new AccountModel(1, "abc123", 5000000, "Dinh Trong Dat");

            Scanner sc = new Scanner(System.in);

            while (choice.equalsIgnoreCase("y")) {
                // Khoi tao menu
                System.out.println("Select your action: ");
                System.out.println("1-Login");
                System.out.println("2-View Account information");
                System.out.println("3-Withdraw");
                System.out.println("4-Transfer");

                int action = sc.nextInt();
                switch (action) {
                    case 1:
                        // Goi ham login
                        if (Controller.login(acc)) {
                            System.out.println("Login success");
                        } else
                            System.out.println("Login fail");
                        break;
                    case 2:
                        // Goi ham xem so du
                        Controller.viewAccount(acc);
                        ;
                        break;
                    case 3:
                        // Goi ham rut tien
                        if (Controller.withdraw(acc)) {
                            System.out.println("Withdraw success");
                        } else
                            System.out.println("Withdraw Fail");
                        break;
                    case 4:
                        // Thêm tài khoản thứ 2 để nhận tiền
                        AccountModel acc2 = new AccountModel(2, "12345", 50, "Tran Minh Canh");
                        // Goi thu tuc chuyển tiền
                        if (Controller.transfer(acc, acc2)) {
                            System.out.println("Transfer success");
                        } else
                            System.out.println("Transfer fail");
                        break;
                    default:
                        System.out.println("Invalid operation");
                        break;
                }// End switch... case
                System.out.println("Continue? (Y/N)");
                choice = sc.next();
                System.out.println();

            }
        }

    }

    static class Controller {

        // Ham chuyen tien
        public static boolean transfer(AccountModel acc1, AccountModel acc2) {
            Scanner sc = new Scanner(System.in);
            System.out.print("Please enter your amount to transfer:");
            // Doc bien kieu double
            double amount = sc.nextDouble();
            return acc1.withdraw(amount) && acc2.depost(amount);
        }

        // Ham xem so du
        public static void viewAccount(AccountModel acc) {
            System.out.println("Account Number: " + acc.getAccountNo());
            System.out.println("Account Name: " + acc.getCustomerName());
            System.out.println("Amount: " + acc.getAmount());
        }

        // Ham rut tien
        public static boolean withdraw(AccountModel acc) {
            Scanner sc = new Scanner(System.in);
            System.out.print("Please enter your amount to withdraw:");
            // Doc bien kieu double
            double amount = sc.nextDouble();
            return acc.withdraw(amount);
        }

        // Ham xu ly login
        public static boolean login(AccountModel acc) {
            // Yeu cau nguoi dung nhap du lieu
            Scanner sc = new Scanner(System.in);
            System.out.print("Enter your account number:");
            // Doc bien kieu Int
            int accNo = sc.nextInt();
            System.out.print("Enter your password:");
            String pass = sc.next();
            // Kiem tra doi chieu tai khoan va mat khau
            return acc.checkLogin(accNo, pass);
        }
    }
}