package com.app.service;

import java.util.List;

import com.app.model.Item;

public interface ItemService {
    Item addItem(Item item);
    Item findItemById(Long iid);
    List<Item> showAllItems();
    Item deleteItemById(Long iid);
    Item updateItem(Long iid, Item newItem);
}
