# How a URL Becomes a Webpage

## Summary
This document explains how a browser turns a URL into a webpage.

## Introduction
This document is for beginners who want to understand how the web works.
It covers DNS, servers, and browsers at a high level.

## Background
When a user enters a URL, multiple systems work together.
DNS resolves the domain, and servers respond with content.

## How It Works
```mermaid
sequenceDiagram
  Browser->>DNS: Resolve domain
  DNS-->>Browser: IP address
  Browser->>Server: HTTP request
  Server-->>Browser: HTML response