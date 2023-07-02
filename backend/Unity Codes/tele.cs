using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class tele : MonoBehaviour
{
    public Transform destination; // Reference to the destination transform

    public void TeleportPlayer()
    {
        // Teleport the player to the destination
        transform.position = destination.position;
    }
}
