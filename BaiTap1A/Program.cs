﻿using System;

namespace BaiTap1A
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string name, phone;
            int age;
            bool genre;

            Console.WriteLine("===========================");
            Console.WriteLine("XIN CHAO");
            Console.WriteLine("===========================");
            Console.WriteLine("XIN MOI NHAP TEN: ");

            name = Console.ReadLine();
            Console.WriteLine("XIN MOI NHAP SO DIEN THOAI: ");
            phone = Console.ReadLine();
            Console.WriteLine("XIN MOI NHAP TUOI: ");
            age = int.Parse(Console.ReadLine());
            Console.WriteLine("XIN MOI NHAP GIOI TINH: ");
            genre = (Console.ReadLine() == "Nam" ? true : false);

            Console.WriteLine("===========================================");
            Console.WriteLine(string.Format("Ten nguoi dung: {0} \n SDT: {1} \n Tuoi: {2} \n Gioi tinh: {3} \n",name,phone,age,genre?"Nam":"Nu"));
            Console.WriteLine("XIN CAM ON!!!");
        }
    }
}
