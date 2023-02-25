package com.example.backend_project.Payload;

import java.util.Date;
import java.sql.Time;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EventRequest {
    private String title;
    private String description;
    private String location;
    private Date date;
    private Time startTime;
    private Time endTime;
    private String image;
    private Long categoryId;

}
