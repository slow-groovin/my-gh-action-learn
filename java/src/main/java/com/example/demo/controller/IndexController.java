package com.example.demo;
import org.springframework.web.bind.annotation.*;
import com.github.action.test.Printer;
import org.springframework.stereotype.Controller;
import java.util.Iterator;
@RestController
@RequestMapping("/index")
public class IndexController {
    Iterator<String> printer=(new Printer()).print().iterator();

    @GetMapping("/hello")
    public String index() {
        return printer.next();
    }
}