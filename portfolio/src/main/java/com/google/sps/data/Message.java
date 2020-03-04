package com.google.sps.data;

public final class Message {
  private final long id;
  private final String message;
  private final long timestamp;

  public Message(long id, String message, long timestamp) {
    this.id = id;
    this.message = message;
    this.timestamp = timestamp;
  }
}
