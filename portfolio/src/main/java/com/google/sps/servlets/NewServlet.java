package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;


@WebServlet("/step_one_servlet")
public class NewServlet extends HttpServlet {
    String[] phrases = new String[] {"Today is a good day!","It works!","Hi"};
    
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
   // response.setContentType("text/html;");
   // response.getWriter().println("Is it working?");
    Gson gson = new Gson();
    String json = gson.toJson(phrases);
    
    response.setContentType("application/json;");
    response.getWriter().println(json);
    
  }



}