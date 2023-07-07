using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class rotate : MonoBehaviour
{
    // Start is called before the first frame update
        [SerializeField] float speed = 10f;
        [SerializeField] float X = 0f;
        [SerializeField] float Y = 0f;
        [SerializeField] float Z = 0f;
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        transform.Rotate(X * Time.deltaTime * speed, Y * Time.deltaTime * speed, Z * Time.deltaTime * speed);
    }
}
