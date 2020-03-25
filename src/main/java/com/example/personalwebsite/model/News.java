package com.example.personalwebsite.model;

import com.fasterxml.jackson.annotation.JsonProperty;


public class News {
    private final String title;
    private final String description;
    private final String imageSrc;
    private final String newsSrc;

    public News(@JsonProperty("title") String title, @JsonProperty("description") String description,
                  @JsonProperty("imageSrc") String imageSrc, @JsonProperty("newsSrc") String newsSrc) {
        this.title = title;
        this.description = description;
        this.imageSrc = imageSrc;
        this.newsSrc = newsSrc;
    }

    public String getTitle() { return this.title; }
    public String getDescription() { return this.description; }
    public String getImageSrc() { return this.imageSrc; }
    public String getNewsSrc() { return this.newsSrc; }
}
