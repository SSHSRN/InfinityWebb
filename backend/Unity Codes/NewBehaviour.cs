using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NewBehaviour : MonoBehaviour
{
    public GameObject prefab; // The prefab to spawn
    public int numberOfObjects; // The number of objects to spawn
    public Vector3 spawnArea; // The area in which to spawn objects

    private void Start()
    {
        SpawnObjects();
    }

    private void SpawnObjects()
    {
        for (int i = 0; i < numberOfObjects; i++)
        {
            Vector3 spawnPosition = transform.position + new Vector3(Random.Range(-spawnArea.x, spawnArea.x),
                                                                    Random.Range(-spawnArea.y, spawnArea.y),
                                                                    Random.Range(-spawnArea.z, spawnArea.z));

            GameObject spawnedObject = Instantiate(prefab, spawnPosition, Quaternion.identity);
            spawnedObject.transform.parent = transform;
        }
    }
}
