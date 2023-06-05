import SectionHeader from "@/app/util-ui/SectionHeader";
import React from "react";

const Resume = () => {
  const text =
    "به دنبال تغییر شغل و یافتن موقعیتی در زمینه‌ی «کپی رایتینگ» در یک شرکت بازاریابی متوسط یا بزرگ هستم. باانگیزه هستم و مهارت یادگیری بسیار بالایی دارم. پیش از این داوطلب شده‌ام تا به معلم‌های دیگر در نوشتن برنامه درسی و تدریس خصوصی کمک کنم.";
  return (
    <div>
      <SectionHeader tittle="رزومه" description={text} />
    </div>
  );
};

export default Resume;
