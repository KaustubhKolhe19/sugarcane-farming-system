package com.farm.sugar.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
public class HealthController {
    @GetMapping("/api/health")
    public Map<String, Object> health(){
        return Map.of("status", "ok", "service", "backend");
    }

    @GetMapping("/api/crops")
    public Map<String, Object> crops(){
        return Map.of("items", java.util.List.of("Sugarcane"));
    }
}
