package com.example.personalwebsite.api;


import com.example.personalwebsite.model.News;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class NewsController {
    @GetMapping("/api/news")
    public News[] getNews(){
        return new News[]{
            new News("Taeyeon One",
                    "Taeyeon One is the most beautiful girl over the world",
                    "https://6.viki.io/image/d4d793d461a44437a8c96bfd6e7f00b3.jpeg?s=900x600&e=t"),
            new News("Taeyeon Two",
                    "Taeyeon Two is the most beautiful girl over the world",
                    "https://img.kpopmap.com/2019/05/Girls-Generation-Taeyeon.jpg"),
            new News("Taeyeon Three",
                    "Taeyeon Three is the most beautiful girl over the world",
                    "https://img.kpopmap.com/2019/05/Girls-Generation-Taeyeon.jpg")
        };
    }
}
