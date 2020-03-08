package com.google.sps.data;

public final class Message {
  private final long id;
  private final String message;
  private final long timestamp;
  private final double score;

  public Message(long id, String message, long timestamp, double score) {
    this.id = id;
    this.message = message;
    this.timestamp = timestamp;
    this.score = score;
  }
}
