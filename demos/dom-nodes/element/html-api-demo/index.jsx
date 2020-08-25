import React, { useState, useMemo } from 'react';
import { Property, DomInspector } from 'mic-inspector';
import { Divider, Radio } from 'antd';

export function HtmlApiDemo() {
  const { Group, Button } = Radio;
  const innerHTML = '<abc></abc><p><xyz></xyz></p>';
  const htmlNamespaceURI = 'http://www.w3.org/1999/xhtml';
  const xmlDocAndHtmlElementTitle = '在任何文档中，对 HTMLElement 设置 innerHTML，子元素都将被解析为 HTMLElement。';

  const xmlDoc = useMemo(() => {
    return document.implementation.createDocument(null, null);
  }, []);

  const [doc, setDoc] = useState(xmlDoc);
  const [namespaceURI, setNamespaceURI] = useState(htmlNamespaceURI);
  const [title, setTitle] = useState(xmlDocAndHtmlElementTitle);

  const onHtmlDocAndXmlElement = () => {
    setDoc(
      document.implementation.createHTMLDocument()
    );

    setNamespaceURI(null);
    setTitle('在 HTML 文档中，对非 HTMLElement 的 <div> 设置 innerHTML，解析出的子元素中可能会包含 HTMLElement。');
  };

  const onXmlDocAndHtmlElement = () => {
    setDoc(xmlDoc);
    setNamespaceURI(htmlNamespaceURI);
    setTitle(xmlDocAndHtmlElementTitle);
  };

  const onXmlDocAndElement = () => {
    setDoc(xmlDoc);
    setNamespaceURI(null);
    setTitle('在非 HTML 文档中，对非 HTMLElement 设置 innerHTML，子元素命名空间保持与父元素一致。');
  };

  const div = useMemo(() => {
    const div = doc.createElementNS(namespaceURI, 'div');

    div.innerHTML = innerHTML;
    return div;
  }, [doc, namespaceURI]);

  const p = div.querySelector('p');
  const abc = div.querySelector('abc');
  const xyz = div.querySelector('xyz');
  // 这里其实就是 doc，在元素未添加到父节点之下时， ownerDocument 不会变
  const ownerDocument = div.ownerDocument;

  return (
    <div>
      <Group defaultValue='1'>
        <Button value='1' onClick={onXmlDocAndHtmlElement}>XMLDocument + HTMLElment</Button>
        <Button value='2' onClick={onHtmlDocAndXmlElement}>HTMLDocument + Element</Button>
        <Button value='3' onClick={onXmlDocAndElement}>XMLDocument + Elment</Button>
      </Group>
      <Divider />
      <h6>前提条件</h6>
      <Property name='ownerDocument' value={Object.getPrototypeOf(ownerDocument)} separator='=' preview />
      <Property name='div.namespaceURI' value={div.namespaceURI} separator='=' preview />
      <Property name='div.innerHTML' value={innerHTML} separator='=' preview />
      <Property name='div' value={Object.getPrototypeOf(div)} separator='=' preview />
      <Divider />
      <h6>元素结构</h6>
      <DomInspector dom={div} expandLevel={2} />
      <Divider />
      <h6>运行结论：{title}</h6>
      <br />
      <Property name='abc.namespaceURI' value={abc.namespaceURI} preview />
      <Property name='abc' value={Object.getPrototypeOf(abc)} preview />
      <br />
      <Property name='p.namespaceURI' value={p.namespaceURI} preview />
      <Property name='p' value={Object.getPrototypeOf(p)} preview />
      <br />
      <Property name='xyz.namespaceURI' value={xyz.namespaceURI} preview />
      <Property name='xyz' value={Object.getPrototypeOf(xyz)} preview />
    </div>
  );
}