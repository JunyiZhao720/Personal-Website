package com.example.personalwebsite.mapper;

import com.example.personalwebsite.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapeer {
    @Select("select * from users where email = #{email} and password = #{password}")
    public User getUserbypasswordandemail(String email, String password);
}
