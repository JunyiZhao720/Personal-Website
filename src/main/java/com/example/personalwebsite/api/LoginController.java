package com.example.personalwebsite.api;

import com.example.personalwebsite.mapper.UserMapeer;
import com.example.personalwebsite.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController


public class LoginController {

   @Autowired
   UserMapeer userMapeer;

   @PostMapping("/api/user/login")
    public User getLoginUser(@RequestBody HashMap<String, String> map){
          User user1 = new User();
       String email = map.get("email");
       String password = map.get("password");
       User user = userMapeer.getUserbypasswordandemail(email, password);
       System.out.println("map = " + user);
//       if(email.equals("123@qq.com") && password.equals("123456")) {
//           user1.setEmail(email);
//           user1.setPassword(password);
//       }




       return user;
   }
}
