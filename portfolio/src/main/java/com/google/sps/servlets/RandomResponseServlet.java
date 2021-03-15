package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;


@WebServlet("/random-response")
public class RandomResponseServlet extends HttpServlet {
    String[] phrases = {"Today is a good day!","Don't worry be happy!","Hi"};
    
  @Override
  public void doGet(final HttpServletRequest request, final HttpServletResponse response) throws IOException {
    final Gson gson = new Gson();
    final String json = gson.toJson(phrases);
    response.setContentType("application/json;");
    response.getWriter().println(json);
    
  }



}